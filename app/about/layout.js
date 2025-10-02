import React from "react"
import Link from "next/link"
export default function MissionLayout ({children}){
    return(
        <div className="p-4 border-2 border-blue-500 rounded-lg">
            <nav>
                <ul>
                    <li> <Link href="/about/mission">Mission</Link></li>
                    <li> <Link href="/about/vision">Vision</Link></li>
                    <li> <Link href="/about/creation">Creation</Link></li>
                </ul>
            </nav>
            <div>{children}</div>
            
        </div>
    )
}