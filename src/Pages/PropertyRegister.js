
import AppLayOut from "../LayOut/App_layout/AppLayOut";
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Upload,
} from 'antd';

// type SizeType = Parameters<typeof Form>[0]['size'];

const PropertyRegister = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <AppLayOut>
      <div className="container" style={{color: 'gray'}}>
        <h1>
          Register Property
        </h1>

      </div>
      <div className="container">
      <Form
      labelCol={{ span: 25}}
      wrapperCol={{ span: 18 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{ maxWidth: 500 }}
    >
      
      <Form.Item label="Title/Description">
        <Input />
      </Form.Item>
      <Form.Item label="Area">
        <Input />
      </Form.Item>
      <Form.Item label="Adress">
        <Input />
      </Form.Item>
      <Form.Item label="Pincode">
        <InputNumber />
      </Form.Item>
      <Form.Item label="State">
        <Select>
          <Select.Option value="State">Maharashtra</Select.Option>
          <Select.Option value="State">Tamilnadu</Select.Option>
          <Select.Option value="State">Telengana</Select.Option>
          <Select.Option value="State">UP</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="City">
        <Select>
          <Select.Option value="City">Pune</Select.Option>
          <Select.Option value="City">Digras</Select.Option>
          <Select.Option value="City">Chennai</Select.Option>
          <Select.Option value="City">Mumbai</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Property Type">
        <Select>
          <Select.Option value="PropertyType">House</Select.Option>
          <Select.Option value="PropertyType">Flat</Select.Option>
          <Select.Option value="PropertyType">Plot</Select.Option>
          <Select.Option value="PropertyType">Bangloo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Village">
        <Input />
      </Form.Item>
      <Form.Item label="Property Condition" valuePropName="checked">
        <Switch /> 
         <Switch/>
      </Form.Item>
      <Form.Item label="Bus Stand Distance From Property">
        <Input />
      </Form.Item>
      <Form.Item label="Auto stand distance from property">
        <Input />
      </Form.Item>
      <Form.Item label="Shop near property" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Hospital near property" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Distance from main road">
      <InputNumber />
      </Form.Item>
      <Form.Item label="School near property" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="College near property" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Shopping mall near property" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="PurchaseDate">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Property Size">
      <InputNumber />
      </Form.Item>
      <Form.Item label="Unit">
      <InputNumber />
      </Form.Item>
      
      
     
      <Form.Item label="Button" type="primary">
        <Button>Button</Button>
      </Form.Item>
    </Form>
    </div>
    </AppLayOut>
  );
};

export default PropertyRegister;