import React from 'react';

const AskQus = () => {
    return (
        <div>
            <div>
                <h2>Most Common Question about our WebSite</h2>
                {/* 1 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How was the taste of the food?</div>
                    <div className="collapse-content text-sm">Please share your thoughts on the flavors, seasoning, and overall taste of the dishes you tried.</div>
                </div>
                {/* 2 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How was the portion size and presentation?</div>
                    <div className="collapse-content text-sm">Tell us if the servings were satisfying and if the food looked appealing when served.</div>
                </div>
                {/* 3 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How was the service and staff behavior?</div>
                    <div className="collapse-content text-sm">Let us know about your experience with the staff, including friendliness, responsiveness, and professionalism..</div>
                </div>
                {/* 4 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Was the restaurant clean and well-maintained?</div>
                    <div className="collapse-content text-sm">Comment on the hygiene, cleanliness, and overall ambiance of the place.</div>
                </div>
                {/* 5 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Would you recommend this restaurant to others?</div>
                    <div className="collapse-content text-sm">Share whether you would come back or suggest this place to friends and family.</div>
                </div>


            </div>
        </div>
    );
};

export default AskQus;
