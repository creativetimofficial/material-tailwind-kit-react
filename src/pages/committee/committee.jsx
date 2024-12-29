import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Committee() {
  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Committee</Typography>
        </div>
        <div className="flex flex-col gap-6">
          <Link to="/committee/about-us" className="flex items-center gap-1 p-1 font-bold">
            <Typography variant="small" className="capitalize">About Us</Typography>
          </Link>
          <Link to="/committee/meeting-notes" className="flex items-center gap-1 p-1 font-bold">
            <Typography variant="small" className="capitalize">Meeting Notes</Typography>
          </Link>
          <Link to="/committee/agenda" className="flex items-center gap-1 p-1 font-bold">
            <Typography variant="small" className="capitalize">Agenda</Typography>
          </Link>
        </div>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}

export default Committee;