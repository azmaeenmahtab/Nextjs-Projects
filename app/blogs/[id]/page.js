import { notFound } from "next/navigation";
import React from "react";

export default function Blogpage ({params}){
    const {id}= params;

    if(id === '4'){
        notFound();
    }
    return <div>Blog Post  description</div>
}