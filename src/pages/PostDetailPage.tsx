/**
 * Reactquery calls queryfn, which runs my supabase query
 * returned data is cached under queryKey, and component  re-renders with that data
 */

import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getPost } from "../api/posts"

export default function PostDetailPage() {
    const { id } = useParams()
    const { data: post, isLoading } = useQuery({
        queryKey: ['post', id],         // name of query in cache
        queryFn: () => getPost(Number(id)),         // fetches data
    })

    if (isLoading) return <div>로딩 중...</div>
    if (!post) return <div>계시글을 찾을 수 없습니다</div>

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{new Date(post.created_at).toLocaleString()}</p>
            <div>{post.content}</div>
        </div>
    )
}