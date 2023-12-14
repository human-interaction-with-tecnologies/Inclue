import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { dummyQuestions } from '../../db/dummyQuestions';

export default function QuestionsPage() {
    const [step, setStep] = useState(0);
    const [questionCount, setQuestionCount] = useState(10); // Add state for question count
    const [selectedQuestions, setSelectedQuestions] = useState(dummyQuestions); // Add state for selected questions
    const [questionIndex, setQuestionIndex] = useState(1);
    const [actualQuestion, setActualQuestion] = useState(dummyQuestions[0]);
    const [correctQuestionsCount, setCorrectQuestionsCount] = useState(0);
    const [optionAuxiliar, setOptionAuxiliar] = useState(0);
    const [previousCorrectQuestions, setPreviousCorrectQuestions] = useState(false);
    const [actualCorrectQuestions, setActualCorrectQuestions] = useState(false);

    const handleNext = () => {
        if (step === 0) {
            const shuffledQuestions = dummyQuestions.sort(() => 0.5 - Math.random()).slice(0, questionCount);
            setSelectedQuestions(shuffledQuestions);
            setStep(step + 1);
        } else {
            if(optionAuxiliar !== 0) {
                if(actualCorrectQuestions) {
                    setCorrectQuestionsCount(correctQuestionsCount + 1);
                    setPreviousCorrectQuestions(true);
                } else {
                    setPreviousCorrectQuestions(false);
                }
                setStep(step + 1);
                setOptionAuxiliar(0);
                setQuestionIndex(questionIndex + 1);
                setActualQuestion(selectedQuestions[questionIndex])
                setActualCorrectQuestions(false);
            }
        }
        
    };

    const handlePrevious = () => {
        if (step > 0) {
            setQuestionIndex(questionIndex - 1);
         }
        setStep(step - 1);
        setOptionAuxiliar(0);
        if(previousCorrectQuestions) {
            setCorrectQuestionsCount(correctQuestionsCount - 1);
            setPreviousCorrectQuestions(false);
        }
    };

    const handleConfirm = () => {
        if(optionAuxiliar !== 0) {
            setStep(step + 1);
           
            setOptionAuxiliar(0);
        }
    };

    const handleReset = () => {
        setStep(0);
        setQuestionCount(10);
        setSelectedQuestions(dummyQuestions);
        setQuestionIndex(1);
        setActualQuestion(dummyQuestions[0]);
        setCorrectQuestionsCount(0);
        setOptionAuxiliar(0);
        setActualCorrectQuestions(false);
        setPreviousCorrectQuestions(false);
    };
    

    const handleQuestionCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const count = parseInt(event.target.value);
        setQuestionCount(count);
    };

    const handleOptionSelection = (optionId: number) => {
        setOptionAuxiliar(optionId);
        
        if(actualQuestion.options.find((option) => option.id === optionId)?.value) {
            setActualCorrectQuestions(true);
        } else {
            setActualCorrectQuestions(false);
        }
    };

    useEffect(() => {
       
        if(step === selectedQuestions.length) {
            const correctsCount = selectedQuestions.filter((question) => {
                const correctOption = question.options.find((option) => option.value);
                return correctOption?.selected;
            }).length;
            setCorrectQuestionsCount(correctsCount);
        }
    }, [step]);

    return (
        <Layout title="Perguntas e Respostas">
            <div id="principal" className="bg-white rounded-lg shadow-md p-4">
                {step === 0 && (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Configure o Perguntas</h1>
                        <p>Configure as próximas seções desse recurso</p>
                        <br />
                        <h2 className="text-1xl font-bold mb-4">Quantidade de perguntas</h2>
                        <p>Máximo 10 perguntas</p>
                        <input 
                            type="number"
                            min="1"
                            max="10"
                            value={questionCount}
                            onChange={handleQuestionCountChange}
                        />
                        <br />
                        <br />
                        <div className='flex  gap-2'>   
                            <button className="flex rounded-lg shadow-lg p-2 mb-3 gap-2 items-center bg-primary text-white font-bold" onClick={handleNext}>Próxima</button>
                        </div>
                    </div>
                )}
                {step > 0 && step < selectedQuestions.length && (
                    <div>
                       <h1 className="text-2xl font-bold mb-4">Pergunta {questionIndex}/{questionCount}</h1>
                       <h1 className="text-1xl font-bold mb-4">{actualQuestion.title}</h1>
                        {actualQuestion.options.map((option) => (
                            <div className='flex  gap-2'>
                                <input
                                    type="radio"
                                    value={option.id}
                                    name={option.text}
                                    checked={optionAuxiliar === option.id}
                                    onChange={(e) => handleOptionSelection(parseInt(e.target.value))}/>
                                <label>{option.text}</label>
                            </div>
                        ))}
                        <br />
                        <div className='flex  gap-2'>     
                            <button className="flex rounded-lg shadow-lg p-2 mb-3 gap-2 items-center bg-text-light text-white font-bold" onClick={handlePrevious}>Voltar</button>
                            <button className="flex rounded-lg shadow-lg p-2 mb-3 gap-2 items-center bg-primary text-white font-bold" onClick={handleNext}>Próxima</button>
                        </div>
                    </div>
                )}

                {step === selectedQuestions.length && (
                    <div>
                       <h1 className="text-2xl font-bold mb-4">Pergunta {questionIndex}/{questionCount}</h1>
                       <h1 className="text-1xl font-bold mb-4">{actualQuestion.title}</h1>
                        {actualQuestion.options.map((option) => (
                            <div className='flex  gap-2'>
                                <input
                                    type="radio"
                                    value={option.id}
                                    name={option.text}
                                    checked={optionAuxiliar === option.id}
                                    onChange={(e) => handleOptionSelection(parseInt(e.target.value))}/>
                                <label>{option.text}</label>
                            </div>
                        ))}
                        <br />
                        <div className='flex  gap-2'>     
                        <button className="flex rounded-lg shadow-lg p-2 mb-3 gap-2 items-center bg-text-light text-white font-bold" onClick={handlePrevious}>Voltar</button>
                            <button className="flex rounded-lg shadow-lg p-2 mb-3 gap-2 items-center bg-primary text-white font-bold" onClick={handleConfirm}>Finalizar</button>
                        </div>
                    </div>
                )}

                {step > selectedQuestions.length && (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Você respondeu {correctQuestionsCount} perguntas corretamente</h1>
                        <div className='flex  gap-2'>    
                           <button className="flex rounded-lg shadow-lg p-2 mb-3 gap-2 items-center bg-primary text-white font-bold" onClick={handleReset}>Reiniciar</button>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}