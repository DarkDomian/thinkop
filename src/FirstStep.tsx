import React, { useEffect } from 'react';
import "antd/dist/reset.css";
import './main.css';

import {Button, Form, Input, InputNumber, Select } from 'antd';
import { useFormStorage } from './useFormStorage';


const FirstStep: React.FC = () => {

  const [form] = Form.useForm();
  const storage = useFormStorage('FirstStep');

  useEffect(() => {
    const savedData = storage.loadData();
    if (savedData) {
      form.setFieldsValue(savedData);
    }
  }, [form]);

  const handleFormChange = () => {
    const formData = form.getFieldsValue();
    storage.saveData(formData);
  };

  const handleClearForm = () => {
    form.resetFields();
    storage.clearData();
  };
  
  
  return (
      <>
        <div className='flex flex-row justify-between my-24'>
          <h1 className='font-semibold text-5xl'>Производственные<br/>параметры фильма</h1>
          <Button className='' onClick={handleClearForm}>Отменить заполнение</Button>
        </div>
        <Form
          form={form}
          layout="vertical"
          className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-4 md:grid-flow-col gap-x-32 gap-y-0"
          size='large'
          onValuesChange={handleFormChange}
        >
          <Form.Item
            label="Название проекта"
            name="projectName"
            className=""
            required={false}
            rules={[
              { required: true, message: 'Заполните поле' },
            ]}
            >
            <Input placeholder="Название" />
          </Form.Item>
          <Form.Item
            label="Жанр"
            name="gener"
            className=""
            required={false}
            rules={[
              { required: true, message: 'Заполните поле' },
            ]}
            >
            <Select placeholder="Жанр">
              <Select.Option value="Аниме">Аниме</Select.Option>
              <Select.Option value="Фентези">Фентези</Select.Option>
              <Select.Option value="Ужасы">Ужасы</Select.Option>
              <Select.Option value="Триллер">Триллер</Select.Option>
              <Select.Option value="Документальный">Документальный</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Формат"
            name="format"
            className=""
            required={false}
            rules={[
              { required: true, message: 'Заполните поле' },
            ]}
          >
            <Select placeholder="Формат">
              <Select.Option value="Онлайн-платформа">Онлайн-платформа</Select.Option>
              <Select.Option value="Большой экран">Большой экран</Select.Option>
              <Select.Option value="Интернет">Интернет</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="№УНФ или отсутствует"
            name="unfNumber"
            className=""
            >
            <InputNumber 
              controls={false}
              className='w-full'
              formatter={(value) => {
                const cleanedValue = `${value}`.replace(/\D/g, '');
                const part1 = cleanedValue.slice(0, 3);
                const part2 = cleanedValue.slice(3, 6);
                const part3 = cleanedValue.slice(6, 9);
                const part4 = cleanedValue.slice(9, 11);
                const part5 = cleanedValue.slice(11, 14);
            
                return [part1, part2, part3, part4, part5]
                  .filter(Boolean)
                  .join('-');
              }}
              parser={(value) => value?.replace(/[^0-9]/g, '') as unknown as number}
              placeholder={'890-000-000-00-000'}
            />
          </Form.Item>
          <Form.Item
            label="Страна производитель (копродукция)"
            name="country"
            className=""
            required={false}
            rules={[
              { required: true, message: 'Заполните поле' },
            ]}
            >
            <Select placeholder="Страна">
              <Select.Option value="США">США</Select.Option>
              <Select.Option value="Франция">Франция</Select.Option>
              <Select.Option value="Германия">Германия</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть"
            name="estimatedCost"
            className=""
            rules={[
              { type: 'number', message: 'Ожидается число' },
            ]}
            >
            {/* <Input placeholder="Сметная стоимость" /> */}
            <InputNumber
              controls={false}
              className="w-full"
              placeholder="Сметная стоимость"

            />
          </Form.Item>
          <Form.Item
            label="Синапсис"
            name="sinapsis"
            className='row-span-2'
            >
            {/* <Input placeholder="Напишите краткое изложение" /> */}
            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }} placeholder="Напишите краткое изложение" />
          </Form.Item>
        </Form>
      </>
  )
}

export default FirstStep