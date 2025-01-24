import { FC } from "react";
import './LastSection.scss'

interface ILastSectionProps {};

export const LastSection: FC<ILastSectionProps> = () => {
    return (
        <section className="call-to-action">
            <div className="text-section">
            Sigup to  <span className="last-chow-africa">chowafrica</span> and say <span className="last-goodbye"> goodbye </span> to mealtime stress.
            </div>
            <div className="button-section">
                <button className="last-button">
                Join Waitlist
                </button>
            </div>
        </section>
    );
}
