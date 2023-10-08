import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("printing all the form data...");
    console.log(formData);
  }

  return (
    <div className="flex justify-center py-6 bg-slate-200 max-h-max">
      <form
        onSubmit={submitHandler}
        className="flex flex-col  w-[50vw] min-w-[200px] border-2 border-slate-500 rounded-md p-4 bg-white shadow-slate-700 shadow-md transition-all duration-300 "
      >
        <label htmlFor="firstName" className="font-bold mt-2">
          First name
        </label>
        <input
          className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm px-4 py-1"
          type="text"
          name="firstName"
          placeholder="Kartvya"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        />

        <label htmlFor="lastName" className="font-bold mt-3">
          Last name
        </label>
        <input
          className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm px-4 py-1"
          type="text"
          name="lastName"
          placeholder="Darji"
          id="lastName"
          onChange={changeHandler}
          value={formData.lastName}
        />

        <label htmlFor="email" className="font-bold mt-3">
          Email
        </label>
        <input
          className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm px-4 py-1"
          type="email"
          name="email"
          placeholder="abc12@gmail.com"
          id="email"
          onChange={changeHandler}
          value={formData.email}
        />

        <label htmlFor="country" className="font-bold mt-3">
          Country
        </label>
        <select
          className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm px-4 py-1"
          type="text"
          name="country"
          id="country"
          onChange={changeHandler}
          value={formData.country}
        >
          <option value="India">India</option>
          <option value="Russia">Russia</option>
          <option value="Nepal">Nepal</option>
          <option value="Bhuatan">Bhuatan</option>
        </select>

        <label htmlFor="streetAddress" className="font-bold mt-3">
          Street Address
        </label>
        <input
          className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm px-4 py-1"
          type="text"
          name="streetAddress"
          placeholder="12, xyz street"
          id="streetAddress"
          onChange={changeHandler}
          value={formData.streetAddress}
        />

        <label htmlFor="city" className="font-bold mt-3">
          City
        </label>
        <input
          className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm px-4 py-1"
          type="text"
          name="city"
          placeholder="Dhanera"
          id="city"
          onChange={changeHandler}
          value={formData.city}
        />

        <label htmlFor="state" className="font-bold mt-3">
          State / Province
        </label>
        <input
          className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm px-4 py-1"
          type="text"
          name="state"
          placeholder="Gujarat"
          id="state"
          onChange={changeHandler}
          value={formData.state}
        />

        <label htmlFor="zipCode" className="font-bold mt-3">
          Zip / Postal Code
        </label>
        <input
          className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm px-4 py-1"
          type="text"
          name="zipCode"
          placeholder="385310"
          id="zipCode"
          onChange={changeHandler}
          value={formData.zipCode}
        />

        <fieldset className="mt-3">
          <legend className="font-bold mb-3">By Email</legend>

          <input
            className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm  h-[20px] w-[20px] cursor-pointer"
            type="checkbox"
            name="comments"
            id="comments"
            onChange={changeHandler}
            checked={formData.comments}
          />
          <label htmlFor="comments" className="font-semibold ml-3">
            Comments
          </label>
          <p className="ml-8 mb-2 text-black text-opacity-70 ">
            Get notified when someones posts a comment on a posting
          </p>

          <input
            className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm   h-[20px] w-[20px] cursor-pointer"
            type="checkbox"
            name="candidates"
            id="candidates"
            onChange={changeHandler}
            checked={formData.candidates}
          />
          <label htmlFor="candidates" className="font-semibold ml-3 ">
            Candidates
          </label>
          <p className="ml-8 mb-2 text-black text-opacity-70 ">
            Get notified when a candidate applies for a job.
          </p>

          <input
            className="rounded-md border-[1px] border-slate-400 shadow-slate-600 shadow-sm  h-[20px] w-[20px] cursor-pointer"
            type="checkbox"
            name="offers"
            id="offers"
            onChange={changeHandler}
            checked={formData.offers}
          />
          <label htmlFor="offers" className="font-semibold ml-3">
            Offers
          </label>
          <p className="ml-8 mb-2 text-black text-opacity-70 ">
            Get notified when a candidate accepts or rejects an offer.
          </p>
        </fieldset>

        <fieldset className="mt-3 flex flex-col gap-2 ">
          <div>
            <legend className="font-bold mt-3">Push Notification</legend>
            <p className="mb-2 text-black text-opacity-70 ">
              These are delivered via SMS to your mobile phone.
            </p>
          </div>

          <div>
            <input
              className="h-[18px] w-[20px] cursor-pointer"
              type="radio"
              name="pushNotification"
              id="Everything"
              value="Everything"
              onChange={changeHandler}
              // checked={formData.value === "Everything"}
            />
            <label htmlFor="Everything" className="font-semibold ml-2">
              Everything
            </label>
          </div>

          <div>
            <input
              className="h-[18px] w-[20px] cursor-pointer"
              type="radio"
              name="pushNotification"
              id="Same as email"
              value="Same as email"
              onChange={changeHandler}
              // checked={formData.value === "Same as email"}
            />
            <label htmlFor="Same as email" className="font-semibold ml-2">
              Same as email
            </label>
          </div>

          <div>
            <input
              className="h-[18px] w-[20px] cursor-pointer"
              type="radio"
              name="pushNotification"
              id="No push notification"
              value="No push notification"
              onChange={changeHandler}
              // checked={formData.value === "No push notification"}
            />
            <label
              htmlFor="No push notification"
              className="font-semibold ml-2"
            >
              No push notification
            </label>
          </div>
        </fieldset>

        <button className="font-bold border-2 border-black hover:bg-black hover:text-white shadow-slate-500 shadow-lg  px-4 py-2 min-w-[4rem] max-w-[6rem] rounded-md transition-all duration-200 mt-5">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
