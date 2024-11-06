import { NextResponse } from "next/server";
import { connectDatabase, updateDocument, deleteDocument, getDocumentById } from "@/services/mongo";
import { ObjectId } from "mongodb";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }>}) {
    const client = await connectDatabase();
    const body = await request.json();
    const { id } = await params;
    const res = await updateDocument(client, 'users', body, new ObjectId(id));
    return new NextResponse(
        res
    );
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }>}) {
    const client = await connectDatabase();
    const { id } = await params;
    const res = await deleteDocument(client, 'users', new ObjectId(id));
    return new NextResponse(
        res
    );
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }  // Wrap params in Promise
) {
    const client = await connectDatabase();
    const { id } = await params;  // Await params here since it's a Promise

    const res = await getDocumentById(client, 'users', new ObjectId(id));
    return NextResponse.json(res);
}
