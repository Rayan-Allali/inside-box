"use client"
import AdminLayout from '@/app/AdminLayout'
import Header from '@/components/Shared/Header'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { z } from 'zod'
import { toFormikValidate } from 'zod-formik-adapter';
import Popup from 'reactjs-popup';
import TraineesListWindow from '@/components/Shared/PopupsWindows/TraineesListWindow';

const AddTrainingFormSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    date: z.string().min(1, 'Date is required'),
    duration: z.date(),
    prequisites: z.string().min(1, 'Prerequisites is required'),
    public: z.string().min(1, 'Public is required'),
    description: z.string().min(1, 'Description is required'),
});

type Trainee = {
    image: any;
    name: string;
}

const AddTraining = () => {

    const [ viewPassword, setViewPassword ] = useState(false);
    const [ isBlured, setIsBlured ] = useState(false);
    const [ traineesList, setTraineesList ] = useState<Trainee[]>([])

    const handleSubmit = (values:any, {setSubmitting}:{setSubmitting:any}) => {   
        console.log(values);
        // get trainees list from the state array
        setSubmitting(false);
    }

    return (
        <div className={`h-full pt-8 px-16 ${isBlured ? 'blur-[5px]' : ''}`}>
            <Header title='Add a training' subtitle='You can control accounts of trainings !' />
            <Formik
            initialValues={{firstName: '', lastName: '', email: '', password: '', gender: '', trainingCourse: ''}} 
            validate={toFormikValidate(AddTrainingFormSchema)}
            onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form className='mt-16 py-6 pl-12 grid grid-rows-6 grid-cols-[50%_40%] gap-y-4 font-gilroy font-light bg-gray-light bg-opacity-10 rounded-md'>
                        
                        {/* Title Input */}
                        <label htmlFor="" className='col-start-1'>
                            Title <span className='text-red-600 mr-16'>*</span>
                            <Field type="text" name="title" placeholder="Title" className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md'/>
                            <ErrorMessage name="title" component="div" className='text-red-400'/>
                        </label>

                        {/* Date Input */}
                        <label htmlFor="" className='row-start-2 col-start-1'>
                            Date <span className='text-red-600 mr-[3.75rem]'>*</span>
                            <Field type="date" name="date" placeholder="Date" className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md'/>
                            <ErrorMessage name="date" component="div" className='text-red-400'/>
                        </label>
                        
                        {/* Duration Input */}
                        <label htmlFor="" className='row-start-3 col-start-1'>
                            Duration <span className='text-red-600 mr-8'>*</span>
                            <Field type="number" name="duration" placeholder="Duration" className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md'/>
                            <ErrorMessage name="duration" component="div" className='text-red-400'/>
                        </label>
                        
                        {/* Prerequisites Input (string) */}
                        <label htmlFor="" className='row-start-4 col-start-1'>
                            Prerequisites <span className='text-red-600'>*</span>
                            <Field type="text" name="prerequisites" placeholder="Prerequisites" className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md'/>
                            <ErrorMessage name="prerequisites" component="div" className='text-red-400'/>
                        </label>

                        {/* Public (audience) Input (string) */}
                        <label htmlFor="" className='row-start-5 col-start-1'>
                            Public <span className='text-red-600 mr-12'>*</span>
                            <Field type="text" name="public" placeholder="Public" className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md'/>
                            <ErrorMessage name="public" component="div" className='text-red-400'/>
                        </label>

                        {/* List of students */}
                        <Popup
                            trigger={
                            <label htmlFor="" className='row-start-6 col-start-1'>
                                {/* <Field as="select" name="students" className='w-2/3 p-2.5 m-2 cursor-pointer border-gray-400  bg-blue-primary disabled:bg-opacity-100 border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'>
                                    <option value="course">List of students</option>
                                </Field> */}

                                <button type='button' className='relative w-2/3 p-2.5 m-2 cursor-pointer text-start border-gray-400  bg-blue-primary disabled:bg-opacity-100 border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'>
                                    List of students
                                    <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none pr-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
                                            <g clip-path="url(#clip0_51_798)">
                                                <path d="M2.02002 11.3859L7.55227 6.32625L2.02002 1.2666" stroke="white" stroke-width="1.30105" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_51_798">
                                                <rect width="7.65385" height="13" fill="white" transform="matrix(-1 0 0 -1 8.38477 13)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </button>
                            </label>
                            }
                            modal
                            onOpen={() => setIsBlured(true)}
                            onClose={() => setIsBlured(false)}
                            nested
                        >
                            {(close) => {
                            return (
                                <TraineesListWindow traineesList={traineesList} setTraineesList={setTraineesList} closeHandler={close} />
                            )}
                            }
                        </Popup>
                        
                        {/* Description Input (textarea) */}
                        <label htmlFor="" className='row-start-1 col-start-2 row-span-3 flex justify-between'>
                            Description <span className='text-red-600 mr-8'>*</span>
                            <Field as="textarea" name="description" placeholder="Description" className='w-[300px] p-2 border-2 border-gray-400 rounded-md'/>
                            <ErrorMessage name="description" component="div" className='text-red-400'/>
                        </label>

                        {/* Image Upload Input */}
                        <div className="flex items-center justify-center justify-self-end w-[300px] row-start-4 col-start-2 row-span-2">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-100 ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-text">Image</p>
                                </div>
                                <input id="dropzone-file" type="file" accept='.png, .jpeg, .jpg, .svg' className="hidden" />
                            </label>
                        </div> 
                        
                        {/* Action Buttons */}
                        <div className='flex juss justify-end gap-x-4 row-start-6 col-start-2'>
                            <button type="button" disabled={isSubmitting} className='w-fit px-4 m-2 text-red-primary hover:text-white border border-red-primary hover:bg-red-primary transition-colors rounded-md'>
                                Cancel
                            </button>
                            <button type="submit" disabled={isSubmitting} className='w-fit px-4 m-2 bg-green-primary hover:bg-green-600  text-white rounded-md'>
                                Add
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddTraining