import { json } from '@sveltejs/kit';
import { comments } from '$src/lib/comments.js'

// export function GET() {
//     return new Response(JSON.stringify(comments), {
//         headers: {
//             'Content-Type' : 'application/json'
//         }
//     });
// };

export function GET() {
    console.log(comments);
    return json(comments);
};

// export async function POST( {request} ) {
export async function POST(requestEvent) {
    const { request } = requestEvent;
    const { text } = await request.json();
    const newComment = {
        id: comments.length + 1,
        text
    };
    comments.push(newComment);

    // return new Response(JSON.stringify(newComment), { status: 201 });
    return json(newComment, { status: 201 });
}