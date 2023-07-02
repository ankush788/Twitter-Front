import Tweet from "./Tweet";

export default function TweetComment(props) {
  return (
    <div>
      <Tweet
        id={props.id}
        tweet={props.tweet}
        name={props.name}
        email={props.email}
        parentId={props.parentId}
        photoLink={props.photoLink}
      />
    </div>
  );
}
