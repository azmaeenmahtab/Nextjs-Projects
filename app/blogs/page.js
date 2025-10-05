import Link from 'next/link';

export default function BlogsPage() {
    const Blogs = [{
        id: 1,
        title: "First blog",
        description: "this is my first blog post"
    },{
        id: 2,
        title: "second blog",
        description: "this is my second blog post"
    },{
        id: 3,
        title: "third blog",
        description: "this is my third blog post"
    }]
  return (
    <div>
      <h1>Blogs Page</h1>
      <p className="mb-4">Welcome to the Blogs page!</p>

      <ul>
        {Blogs.map((blog) => (
            <li key={blog.id}>
              <h2 className="text-lg font-semibold"> <Link href={`/blogs/${blog.id}`}>{blog.title}</Link></h2>
            </li>
        ))}
      </ul>
    </div>
  );
}