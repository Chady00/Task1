import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";

import MyCheckBox from "./MyCheckBox";
import MySwitch from "./MySwitch";
import "../Styles/MyForm.css";
import type { FormItem } from "../types/type";
import type { Question } from "../types/type";
import QuestionAdder from "./QuestionAdder";

interface MyFormProps {
  formData: FormItem[];
  AddQuestion: () => void;
  rmQuestion: (id: number) => void;
  updateQuestion: (id: number, question: Question) => void;
}

const MyForm: React.FC<MyFormProps> = ({
  formData,
  AddQuestion,
  rmQuestion,
  updateQuestion,
}) => {
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    // Submit the form data to your backend server here
  };
  const handleInputChange = (name: string, value: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        style={{ paddingTop: "10px" }}
      >
        {formData.map((item) =>
          item.type === "complex" ? (
            <Row key={item.name}>
              <Col span={12}>
                <Form.Item
                  label={<p className="custom-label">{item.label}</p>}
                  name={item.name}
                  rules={[
                    {
                      message: `Please enter your ${item.label.toLowerCase()}`,
                    },
                  ]}
                >
                  {item.Noinput ? null : (
                    <Input
                      value={formValues[item.name] || ""}
                      onChange={(e) =>
                        handleInputChange(item.name, e.target.value)
                      }
                      className="custom-input"
                      style={{ width: "200%" }}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <MyCheckBox checkText={item.checkboxText} />
              </Col>
              <Col span={6}>
                <MySwitch />
              </Col>
            </Row>
          ) : (
            <Form.Item
              key={item.name}
              label={<p className="custom-label">{item.label}</p>}
              name={item.name}
              colon={false}
              rules={[
                {
                  message: `Please enter your ${item.label.toLowerCase()}`,
                },
              ]}
            >
              <Input
                value={formValues[item.name] || ""}
                onChange={(e) => handleInputChange(item.name, e.target.value)}
                className="custom-input"
              />
            </Form.Item>
          )
        )}
        {/* <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
        <QuestionAdder
          AddQuestion={AddQuestion}
          rmQuestion={rmQuestion}
          updateQuestion={updateQuestion}
        />
      </Form>
    </>
  );
};

export default MyForm;
