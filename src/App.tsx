import React from 'react';
import "antd/dist/reset.css";
import './main.css';

import {Button, Form, Input } from 'antd';

const FirstStep: React.FC = () => {
  return (
    <div className='w-full h-full overflow-y-auto md:max-w-screen md:max-h-screen md:overflow-hidden flex flex-col'>
      <div className='justify-center max-w-6xl mx-auto'>
        <div className='flex flex-row justify-between my-24'>
          <h1 className='font-semibold text-5xl'>Производственные<br/>параметры фильма</h1>
          <Button className='' onClick={() => console.log('It was a clicl')}>Отменить заполнение</Button>
        </div>
        <Form
          layout="vertical"
          className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-4 md:grid-flow-col gap-x-32 gap-y-0"
          size='large'
        >
          <Form.Item label="Название проекта" className="">
            <Input placeholder="Название" />
          </Form.Item>
          <Form.Item label="Жанр" className="">
            <Input placeholder="Жанр" />
          </Form.Item>
          <Form.Item label="Формат" className="">
            <Input placeholder="Формат" />
          </Form.Item>
          <Form.Item label="№УНФ или отсутствует" className="">
            <Input placeholder="890-000-000-00-000" />
          </Form.Item>
          <Form.Item label="Страна производитель (копродукция)" className="">
            <Input placeholder="Страна" />
          </Form.Item>
          <Form.Item label="Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть" className="">
            <Input placeholder="Сметная стоимость" />
          </Form.Item>
          <Form.Item label="Синапсис" className='row-span-2'>
            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }} placeholder="Напишите краткое изложение" />
          </Form.Item>
        </Form>
      </div>
      <div>
      </div>
    </div>
  )
}

export default FirstStep