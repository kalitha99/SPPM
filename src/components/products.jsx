import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Select} from "antd";
import useRequest from "../services/RequestContext";
import VCard from "./Card";

const Products = () => {
    const {Option} = Select;
    const {request} = useRequest();
    const [products, setProducts] = useState();
    const [productForm] = Form.useForm();

    async function getProd(values) {
        try {

            let result = await request.post("http://localhost:8000/product/searchProducts", values);
            setProducts(result.data?.Products)

        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    useEffect(() => {
        productForm.setFieldsValue({category: ""});
        const values = {
            category: ""
        }
        getProd(values)

    }, []);

    return (
        <div>

            <Form
                layout="vertical"
                onFinish={getProd}
                name={"productForm"}
                form={productForm}
            >
                <Row style={{width: '100%'}}>
                    <Col offset={1} span={8}>
                        <Form.Item
                            name={"category"}
                            label="Category"
                        >
                            <Select
                                allowClear
                            >
                                <Option value=''>All</Option>
                                <Option value="pc">PC</Option>
                                <Option value="monitor">monitor</Option>

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{width: '100%'}}>
                    <Col offset={1} span={5}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                search
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>

            <br/>
            <div className="container">
                <div className="row hidden-md-up">
                    {products?.map((item) => (
                        <VCard key={item.id} item={item}/>
                    ))}
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Products;
