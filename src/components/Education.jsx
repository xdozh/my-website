import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import {education} from "../constants";
import { fadeIn, textVariant } from '../utils/motion';

const EducationCard = ({index,name,date,description,tags,image,image2,source_code_link,}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={image2}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}, {date}</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Education = () => {
    return (
        <>

            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My Education and Projects
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Degrees | Certifications | Projects
                </h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    The following shows my degrees and certifications. Also showcasing my projects, skills, and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. These projects reflect my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {education.map((education, index) => (
                    <EducationCard key={`education-${index}`} index={index} {...education} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Education, "");