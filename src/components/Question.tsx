import { Card } from "antd"; // Make sure you import Card from the appropriate library

const cardHeadStyle = {
  backgroundColor: "#f0f2f5", // You can customize this style as needed
};

const Question = () => {
  return (
    <Card
      title="Personal Information"
      size="default"
      headStyle={cardHeadStyle}
      className="card-content"
    >
      
    </Card>
  );
};

export default Question;
