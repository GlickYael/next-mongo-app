import { NextResponse } from "next/server";
import { connectDatabase, getAllDocuments ,insertDocument} from "@/services/mongo";


export async function GET(request: Request) {
    const client = await connectDatabase();
    const data = await getAllDocuments(client, 'users');
    
    return NextResponse.json({
        data
    })
}

export async function POST(request: Request){
    const client = await connectDatabase();
    let res;
    const body = await request.json();
    res = await insertDocument(client, 'users', body)
    
    return NextResponse.json({
        res
    })
}