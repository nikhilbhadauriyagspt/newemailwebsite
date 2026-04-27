import React, { useEffect, useState } from "react";

export default function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("cookieAccepted");
        if (!accepted) {
            setShow(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieAccepted", "true");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-5xl rounded-2xl bg-white p-5 shadow-2xl border border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-sm text-gray-700">
                    We use cookies to improve your browsing experience, analyze website traffic,
                    and provide better services. By clicking “Accept”, you agree to our cookie use.
                    <a href="/cookie-policy" className="text-blue-600 font-medium ml-1">
                        Read Cookie Policy
                    </a>
                </p>

                <button
                    onClick={acceptCookies}
                    className="rounded-lg bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700 transition"
                >
                    Accept
                </button>
            </div>
        </div>
    );
}