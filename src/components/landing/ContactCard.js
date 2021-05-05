import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';

export default function ContactCard({ icon, title, children }) {
    return (
        <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blue-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6">
                <Icon name={icon} size="xl" />
            </div>
            <H6 color="gray">{title}</H6>
            <Paragraph color="blueGray">{children}</Paragraph>
        </div>
    );
}
