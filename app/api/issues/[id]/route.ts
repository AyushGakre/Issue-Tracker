import prisma from "@/prisma/client";
import { IssueSchema } from "@/validationSchema";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest,
    {params}:{ params: {id: string}}){
        const body =  await request.json();
        const validation = IssueSchema.safeParse(body);
        if(!validation.success){
            return NextResponse.json(validation.error.format(), { status: 400});
        }
        const issue = await prisma.issue.findUnique({
            where: {id : parseInt(params.id)}
        })
        if(!issue){
            return NextResponse.json({error: 'Invalid issue'}, { status: 404})
        }

        const updatedissue = await prisma.issue.update({
            where: {id : issue.id},
            data: {
                title: body.title,
                description: body.description,
                status: body.status
            }
        })
        
        
        return NextResponse.json(updatedissue)
}

export async function DELETE(
    request: NextRequest,
    {params}:{ params: {id: string}}){
        
        const issue = await prisma.issue.findUnique({
            where: {id : parseInt(params.id)}
        })
        if(!issue){
            return NextResponse.json({error: 'Invalid issue'}, { status: 404})
        }

        await prisma.issue.delete({
            where: {id : issue.id}
        })

        return NextResponse.json({});
    }
