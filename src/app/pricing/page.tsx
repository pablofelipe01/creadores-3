'use client';

import React, { useState } from 'react';
import PlanCard from '../../../components/PlanCard'; // Ruta correcta a PlanCard
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Pricing = () => {
    const [iframeSrc, setIframeSrc] = useState('');
    const [showIframe, setShowIframe] = useState(false);

    const planes = [
        {
            title: "Plan Premium",
            features: [
                "Integración de Token y Tecnología",
                "Acceso al Motor Blockchain",
                "Fábrica de Billeteras",
                "Desarrollo de Contratos Inteligentes",
                "Tutoriales Avanzados",
                "Marcos Web3 Extendidos"
            ],
            price: "$9.99/mes",
            url: "https://app.unlock-protocol.com/checkout?id=11f43d6e-4912-479a-9470-32196d0395b5"
        },
        {
            title: "Plan Agencia",
            features: [
                "Soluciones Blockchain Personalizadas",
                "Integración Completa de Billeteras",
                "Contratos Inteligentes Personalizados",
                "Tutoriales Personalizados",
                "Marcos Web3 Comprensivos"
            ],
            price: "próximamente",
            url: "http://example.com/agency"
        }
    ];

    const handlePlanClick = (url: string) => {
        setIframeSrc(url);
        setShowIframe(true);
    };

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col relative">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <NavBar />
            <main className="relative py-16 px-4 flex-grow pt-40">
                <h1 className="text-4xl font-bold text-white mb-10 text-center">Planes de Precios para Creadores</h1>
                <p className="text-center text-sm text-gray-300 mt-4"> * Si no eres un creador, no necesitas un plan de pago.</p>
                <br />
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {planes.map((plan, index) => (
                            <PlanCard key={index} plan={plan} onClick={() => handlePlanClick(plan.url)} />
                        ))}
                    </div>
                </div>
                <p className="text-center text-sm text-gray-300 mt-4">
                    * Cancelación disponible después de 3 meses en cualquier momento.
                </p>
                <Footer />
            </main>
            {showIframe && (
                <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 p-5 rounded-lg z-50 w-11/12 h-[90vh] max-w-5xl overflow-hidden shadow-lg">
                    <iframe
                        src={iframeSrc}
                        className="w-full h-full border-none"
                    ></iframe>
                    <button
                        onClick={() => setShowIframe(false)}
                        className="absolute top-2 right-2 bg-gray-800 text-white py-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
                    >
                        Cerrar
                    </button>
                </div>
            )}
        </div>
    );
};

export default Pricing;
