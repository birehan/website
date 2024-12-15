export interface ApiResponse<T> {
  success: boolean
  data: T | null
  error: string | null
  message: string | null
}

export interface LoginUser {
  email: string
  password: string
}

export interface AuthType {
  email: string
  password: string
}

export interface User {
  email: string
  role: string
  id: string
  username: string
  token: string
  school_id?: string
  school_name?: string
  total_api_calls: number
  total_cost: number
}

export interface Feature {
  key: string
  label: string
  type: string
  options: string[]
  is_llm_generated: boolean
  feature_order: number
  required: boolean
  generation_type: string
  number_of_words: number
  id?: string
}
export interface FeatureSelection {
  [key: string]: string // Represent feature selections as a dictionary with key-value pairs
}

export interface ContextFile {
  id?: string
  template_id: string
  context_file_link: string
  file_key?: string
  feature_selections: FeatureSelection // feature_selections is now a dictionary
}
export interface TemplateData {
  id?: string
  name: string
  category: string
  template_link: string
  features: Feature[]
  prompt: string
  language: string
  preview_image: string
}

export interface School {
  id?: string
  name: string
  logo?: string
}

export interface Message {
  role: 'system' | 'user'
  message: string
  error: string
}

export interface ChatRequest {
  message: string
  is_new_chat: boolean
}

export enum QuestionTypeEnum {
  MULTIPLE_CHOICE = 'multiple_choice',
  TRUE_FALSE = 'true_false',
  SHORT_ANSWER = 'short_answer',
  FILL_IN_THE_BLANK = 'fill_in_the_blank',
}

export enum DifficultyLevelEnum {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum TemplateLanguage {
  ENGLISH = 'english',
  ARABIC = 'arabic',
  HEBREW = 'hebrew',
}

// Interface for QuestionDetail
export interface QuestionDetail {
  id?: string
  template_id: string
  question_type: QuestionTypeEnum
  number_of_questions: number
}

// Interface for QuestionsTemplate
export interface QuestionsTemplate {
  id?: string
  template_name: string
  subject: string // Derived from teacher profile
  grade: number // Range: 1-12
  language: TemplateLanguage
  difficulty_level: DifficultyLevelEnum
  teacher_id: string
  created_at?: string // Date-time string in ISO format
  updated_at?: string // Date-time string in ISO format
  question_details?: QuestionDetail[] // Array of associated question details
  question_files?: QuestionFile[]
  topic?: string
  contextList?: any[],
  school_name?: string
  school_id?: string

}

export interface SuggestionDataTemplate {
  template_name: string
  subject: string // Derived from teacher profile
  grade: number // Range: 1-12
  language: TemplateLanguage
  difficulty_level: DifficultyLevelEnum
  topic?: string
}

export interface QuestionFile {
  id?: string
  file_link: string
  template_id: string
  content?: string
  name?: string
}

// Define an interface for Multiple Choice Questions
export interface MultipleChoiceQuestion {
  id?: string
  description: string // The question description
  options: string[] // The available options (A, B, C, D)
  answer: string // The correct answer
  explanation: string // Explanation for the correct answer
}

// Define an interface for True/False Questions
export interface TrueFalseQuestion {
  id?: string
  question: string // The question statement
  answer: boolean // True or False answer
  explanation: string // Explanation for the answer
}

// Define an interface for Short Answer Questions
export interface ShortAnswerQuestion {
  id?: string
  question: string // The question
  answer: string // The short answer
  explanation: string // Explanation for the answer
}

// Define an interface for Fill-in-the-Blank Questions
export interface FillInTheBlankQuestion {
  id?: string
  text_before: string // Text before the blank
  text_after: string // Text after the blank
  answer: string // The correct answer for the blank
  explanation: string // Explanation for the answer
}

// Define a generic interface for Question that can be one of multiple types
export interface Question {
  multiple_choice?: MultipleChoiceQuestion[]
  true_false?: TrueFalseQuestion[]
  short_answer?: ShortAnswerQuestion[]
  fill_in_the_blank?: FillInTheBlankQuestion[]
  google_doc_link?: string
}

export interface Classroom {
  id: string // UUID for the classroom
  name: string // Name of the classroom
  grade?: string // Grade (optional)
  subject?: string // Subject (optional)
  room?: string // Room (optional)
  school_id: string // UUID for the associated school
  teacher_id: string // UUID for the associated teacher
  students: StudentClassroom[] // Relationship to students (array of StudentClassroom)
  class_code: string // Unique class code
  class_link?: string // Optional classroom link
  barcode?: string // Optional barcode (could be a link or base64 string)
}

// Assuming you have a StudentClassroom interface defined elsewhere, it might look something like this:
export interface StudentClassroom {
  student_id: string // UUID for the student
  username: string // UUID for the classroom
  email: string
}

export interface UserProfileForm {
  username: string
  email: string
  current_password?: string
  new_password?: string
}

export const languageDisplayNames = {
  en: {
    english: 'English',
    arabic: 'Arabic',
    hebrew: 'Hebrew',
  },
  ar: {
    english: 'الإنجليزية',
    arabic: 'العربية',
    hebrew: 'العبرية',
  },
  he: {
    english: 'אנגלית',
    arabic: 'ערבית',
    hebrew: 'עברית',
  },
}

export const difficultyLevelDisplayNames = {
  en: {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
  },
  ar: {
    easy: 'سهل',
    medium: 'متوسط',
    hard: 'صعب',
  },
  he: {
    easy: 'קל',
    medium: 'בינוני',
    hard: 'קשה',
  },
}

export const questionTypeDisplayNames = {
  en: {
    multiple_choice: 'Multiple Choice',
    true_false: 'True/False',
    short_answer: 'Short Answer',
    fill_in_the_blank: 'Fill in the Blank',
  },
  ar: {
    multiple_choice: 'اختيار من متعدد',
    true_false: 'صح/خطأ',
    short_answer: 'إجابة قصيرة',
    fill_in_the_blank: 'املأ الفراغ',
  },
  he: {
    multiple_choice: 'בחירה מרובה',
    true_false: 'נכון/לא נכון',
    short_answer: 'תשובה קצרה',
    fill_in_the_blank: 'מלא את החסר',
  },
}

// QuestionSet Interface
export interface QuestionSet {
  id: string
  name: string
  classroom_id: string
  teacher_id: string
  questions: Question
  created_at: string
  updated_at: string
}

// Generic Question Interface

// Assignment Interface
export interface Assignment {
  id: string
  classroom_id: string
  student_id: string
  student_name?: string
  question_set_id: string
  status: 'assigned' | 'in_progress' | 'completed'
  assigned_at: string
  completed_at?: string
  total_score?: number
}

export interface LessonPlan {
  subject: string
  grade: string
  language: TemplateLanguage
  topic: string
  duration: string
}

export interface LessonPlanResponse {
  title: string
  objective: string
  activities: {
    name: string
    description: string
    duration: string
  }[]
  materials: string[]
  assessment: string
  homework: string
  google_doc_link: string
}

// StudentAnswer Interface
export interface StudentAnswer {
  id: string
  assignment_id: string
  question_id: string
  question_type: 'multiple_choice' | 'true_false' | 'short_answer' | 'fill_in_the_blank'
  answer: string | boolean | string[]
  submitted_at: string
  is_correct?: boolean
  feedback?: string
}

// Classroom Interface
// export interface Classroom {
//   id: string
//   name: string
//   code: string // Unique code for students to join
//   teacher_id: string
//   students: Student[]
//   created_at: string
//   updated_at: string
// }

// // Student Interface
// export interface Student {
//   id: string
//   name: string
//   email: string
// }
