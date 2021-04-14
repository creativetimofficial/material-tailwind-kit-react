import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';

export default function StatusCard({ color, icon, title, children }) {
    return (
        <div className="w-full md:w-4/12 px-4 flex justify-center text-center">
            <Card>
                <CardBody>
                    <div
                        className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-${color}-500`}
                    >
                        <Icon name={icon} size="xl" />
                    </div>
                    <H6 color="gray">{title}</H6>
                    <Paragraph color="blueGray">{children}</Paragraph>
                </CardBody>
            </Card>
        </div>
    );
}
