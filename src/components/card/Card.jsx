import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  const { post } = props;
  return (
    <Link href={"/blog/" + post?.id}>
      {/* <Image src={post.image} width={400} height={300} alt={post?.title} /> */}
      <Image src={post.url} width={400} height={300} alt={post?.title} />
      {/* <img src={post.image} /> */}
      <p>id :{post.id}</p>
      <h3>albumId : {post.albumId}</h3>
    </Link>
  );
};

export default Card;
