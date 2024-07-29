import React from "react";
import Image from "next/image";

const MapItem = (props) => {
    const { passdata } = props;

    const visit = (site) => {
        window.open(site, "_blank");
    };

    return (
        <div className="relative w-full flex flex-row items-center md:ml-0 justify-between">
            <Image
                src="/image/git.png"
                width={40}
                height={40}
                className="absolute left-[5px] md:left-[3px] top-0 rounded-full shadow-lg shadow-orange-100"
                alt="gitimage"
                data-aos="fade-up"
                data-aos-duration="1000"
            />
            <div
                className={`md:basis-[100%]  ml-6 md:ml-0 py-3`}
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <h6 className="text-lg md:text-xl ml-14">{passdata.history}</h6>
                <div className="hover:bg-slate-50 text-left w-full max-w-[90%] md:max-w-[90%] mx-auto rounded-md p-4 md:p-6">
                    <div className=" font-bold text-slate-900 text-lg md:text-xl lg:text-2xl pb-4">
                        <a
                            className="hover:underline hover:decoration-sky-800 hover:cursor-pointer"
                            onClick={() => visit(passdata.site)}
                        >
                            {passdata.title}
                        </a>
                    </div>
                    <div className="text-lg md:text-xl">{passdata.role}</div>
                    <div className="mt-4 text-base font-irish-grover p-2 md:p-4">
                        <ul className="list-outside list-disc">
                            {passdata.experience &&
                                passdata.experience.length > 0 &&
                                passdata.experience.map((item, key) => (
                                    <li key={key}>
                                        <p className="text-lg md:text-xl text-black/60">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapItem;
