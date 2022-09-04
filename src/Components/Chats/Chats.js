import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#f47373',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#f47373',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
}

export default class Chats extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={[
                        {
                            id: "1",
                            message: "Welcome to SPHECHO . What's your name?",
                            trigger: "2"
                        }, {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[a-z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Please enter a valid name.';
                                }
                            },
                            trigger: "3"
                        },

                        {
                            id: "3",
                            message: "Hi {previousValue}, nice to meet you!",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "Do you need any help?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                { value: "y", label: "Yes", trigger: "6A" },
                                { value: "n", label: "No", trigger: "6B" },
                            ]
                        },
                        {
                            id: "6A",
                            message: "Great! Tell me what are you looking for...",
                            trigger: "seleccion"
                        },
                        {
                            id: "6B",
                            message: " See you later",
                            end: true
                        },
                        {
                            id: "seleccion",
                            options: [
                                { value: "f", label: "clinical services", trigger: "7A" },
                                { value: "b", label: "consulation", trigger: "7B" },
                            ]
                        },
                        {
                            id: "7A",
                            message: "SPHECHO offers a wide range of services, including ST, PT, PT SE, B&P Therapy, and Hearing Consultation. ! Which of these Clinical Services would you like to know more about?",
                            trigger: "seleccionFront"
                        },
                        {
                            id: "7B",
                            message: "Based on the details you share when you sign up, the ideal healthcare professional for you will be matched. You will receive a free consultation with your doctor after the matching is finished.! Which of these Consultation would you like to know more about?",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "seleccionFront",
                            options: [
                                { value: "Angular_(framework)", label: "Speech Therapy", trigger: "9" },
                                { value: "React", label: "Occupational therapy", trigger: "9" },
                                { value: "Vue.js", label: "Physcio therapy", trigger: "9" },
                            ]
                        },
                        {
                            id: "seleccionBack",
                            options: [
                                { value: "Spring_Framework", label: "Video consultation", trigger: "9" },
                                { value: "Laravel", label: "hybrid Consultation", trigger: "9" },
                                { value: ".NET_Core", label: "Audio Consultation", trigger: "9" },
                            ]
                        },
                        {
                            id: "9",
                            message: 'Loading',
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "Do you need to know anything else?",
                            trigger: "respuestaVuelta",
                        },
                        {
                            id: "respuestaVuelta",
                            options: [
                                { value: "y", label: "Yes", trigger: "6A" },
                                { value: "n", label: "No", trigger: "6B" },
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}