import Comment from "./comment";

interface CommentListProps {}

const CommentList: React.FC<CommentListProps> = ({}) => {
  return (
    <div className="flex flex-col w-full h-full gap-y-4">
      {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <Comment key={el} />
      ))}
    </div>
  );
};

export default CommentList;
