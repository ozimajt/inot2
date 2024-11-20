import React from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  school: z.string().min(1, "School is required")
});

type FormData = z.infer<typeof schema>;

interface StudentFormProps {
  onSubmit: (data: FormData) => void;
  backgroundColor: string;
  textColor?: string;
  ShapeIcon: React.FC;
}

export const StudentForm: React.FC<StudentFormProps> = ({ 
  onSubmit, 
  backgroundColor,
  textColor = "white",
  ShapeIcon 
}) => {
  const { register, handleSubmit, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  });

  const name = watch("name");
  const school = watch("school");
  const showGoButton = name && school;

  return (
    <main 
      className="flex flex-col min-h-screen max-h-screen font-['SF_Pro_Display'] relative overflow-hidden"
      style={{ 
        backgroundColor,
        backgroundImage: `
          linear-gradient(${backgroundColor}55, ${backgroundColor}55),
          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.15' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")
        `
      }}
    >
      <header className="flex justify-end items-center px-10 py-8">
        <div className="w-[22%] flex justify-end items-center">
          <ShapeIcon />
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="px-10 mt-auto mb-[10vh]">
        <div className="flex flex-col gap-[10vh] w-[66%]">
          <div>
            <input
              {...register("name")}
              className="w-full border-b-2 text-[16vh] tracking-[-3px] focus:outline-none py-[0.5vh] leading-none bg-transparent font-medium"
              style={{ 
                borderColor: textColor,
                color: textColor
              }}
            />
            <label 
              className="block text-[4vh] font-light tracking-[-2px] mt-2 mb-[0.2vh]" 
              style={{ 
                color: '#292B2D',
                fontFamily: 'SF Pro Display Light'
              }}
            >
              What Is Your First Name?
            </label>
            <p 
              className="text-[2.16vh] tracking-[-1px] uppercase leading-[0.9]"
              style={{ 
                color: '#292B2D',
                opacity: 0.5,
                fontFamily: 'SF Pro Display'
              }}
            >
              YOUR FIRST NAME ONLY - NO SURNAME REQUIRED. USE YOUR REAL NAME. ALL NAMES THAT APPEAR FAKE, CONTAIN NUMBERS AND SYMBOLS OR EXPLICIT, ARE DELETED IMMEDIATELY.
            </p>
          </div>

          <div>
            <input
              {...register("school")}
              className="w-full border-b-2 text-[16vh] tracking-[-3px] focus:outline-none py-[0.5vh] leading-none bg-transparent font-medium"
              style={{ 
                borderColor: textColor,
                color: textColor
              }}
            />
            <label 
              className="block text-[4vh] font-light tracking-[-2px] mt-2 mb-[0.2vh]"
              style={{ 
                color: '#292B2D',
                fontFamily: 'SF Pro Display Light'
              }}
            >
              What School Do You Go To?
            </label>
            <p 
              className="text-[2.16vh] tracking-[-1px] uppercase leading-[0.9]"
              style={{ 
                color: '#292B2D',
                opacity: 0.5,
                fontFamily: 'SF Pro Display'
              }}
            >
              USE REAL, SINGLE WORD NAME OF THE SCHOOL YOU ATTEND.
            </p>
          </div>
        </div>

        <AnimatePresence>
          {showGoButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-0 right-0 w-[34vw] h-[50vh] flex items-end justify-end p-8"
            >
              <button
                type="submit"
                className="w-full h-full flex items-end justify-end"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-full h-full transform scale-150"
                  style={{ fill: textColor }}
                >
                  <path d="M7.5 3L6 4.5L13.5 12L6 19.5L7.5 21L16.5 12L7.5 3Z" transform="rotate(45 12 12)" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </main>
  );
};