import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const validationSchema = z.object({
    name: z.string().min(2, "Minimum 2 characters required").max(50, "Maximum 50 characters allowed"),
    email: z.string().email("Invalid email format"),
    phone: z.string().length(10, "Exactly 10 characters required"),
    age: z.coerce.number().max(99, "Age must be under 99"),
    academicyear: z.string().length(4, "Academic year must be 4 digits"),
});

const ValidationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        
    };

    return (
       
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <label >Name:</label>
                    <input {...register("name")}/>
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                
                <div >
                    <label >Email:</label>
                    <input {...register("email")} className="w-full p-2 border rounded" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                
                <div className="mb-4">
                    <label>Phone:</label>
                    <input {...register("phone")} />
                    {errors.phone && <p >{errors.phone.message}</p>}
                </div>
                
                <div className="mb-4">
                    <label className="block">Age:</label>
                    <input type="number" {...register("age")}  />
                    {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                </div>
                
                <div >
                    <label >Academic Year:</label>
                    <input {...register("academicyear")}  />
                    {errors.academicyear && <p >{errors.academicyear.message}</p>}
                </div>
                
                <button type="submit" >Submit</button>
            </form>
     
    );
};

export default ValidationForm;
