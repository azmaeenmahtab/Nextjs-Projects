import React from 'react'

export default async function Comments({promise}) {
  const comments = await promise;

  return (
    <div>
      <div>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Comments</h2>
                {comments.map((comment) => (
                    <div key={comment.id} className="border rounded-lg p-4 mb-4 bg-gray-50">
                        <h3 className="font-semibold">{comment.name}</h3>
                        <p className="text-gray-700">{comment.body}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}
