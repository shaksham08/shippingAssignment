import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { hexToRgb } from "../../utils/hextorgb";
import { v4 as uuidv4 } from "uuid";
import { shippingContext } from "../../context/ShippingContext";

const FormPage = () => {
  const { register, handleSubmit, watch, formState, reset } = useForm({
    mode: "onChange",
  });
  const { dispatch } = useContext(shippingContext);
  const { errors } = formState;
  const colorValue = watch("color");

  const onSubmit = (shippingData) => {
    const data = {
      ...shippingData,
      color: hexToRgb(shippingData.color),
      id: uuidv4(),
    };
    dispatch({
      type: "ADD_SHIPPING_DETAILS",
      payload: data,
    });
    reset();
  };

  return (
    <div className="mt-6 overflow-visible">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Add Shipping Box Details
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md flex flex-col gap-3 overflow-visible"
      >
        <div className="flex flex-col gap-4">
          <label>Receivers Name</label>
          <input
            placeholder="Enter Receiver Name"
            {...register("receiver", { required: "This is required" })}
            className="p-2 border border-gray-300 rounded"
          />
          {errors?.receiver && (
            <p className="text-red-500 text-sm">{errors.receiver.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label>Weight (in Kgs.)</label>
          <input
            placeholder="Enter Weight in Kg"
            type="number"
            {...register("weight", {
              required: "This is required",
              min: { value: 0, message: "Weight can’t be negative" },
            })}
            min={0}
            className="p-2 border border-gray-300 rounded"
          />
          {errors?.weight && (
            <p className="text-red-500 text-sm">{errors.weight.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label>Box Color</label>
          <input
            type="color"
            onChange={(e) => {
              e.target.blur();
            }}
            {...register("color", { required: "This is required" })}
            className="p-2 border border-gray-300 rounded cursor-pointer"
          />
          {errors?.color && (
            <p className="text-red-500 text-sm">Please select a color</p>
          )}
          {/* 👇 show selected color live below input */}
          {colorValue && (
            <div className="flex items-center gap-2 mt-1">
              <div
                className="w-6 h-6 border rounded"
                style={{ backgroundColor: colorValue }}
              ></div>
              <span className="text-sm text-gray-600">
                Selected color: {hexToRgb(colorValue)}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Destination Country</label>
          <select
            {...register("country", { required: "This is required" })}
            className="p-2 border border-gray-300 rounded bg-white cursor-pointer"
          >
            <option value="">Select a country</option>
            <option value="Sweden">Sweden (7.35 INR)</option>
            <option value="China">China (11.53 INR)</option>
            <option value="Brazil">Brazil (15.63 INR)</option>
            <option value="Australia">Australia (50.09 INR)</option>
          </select>
          {errors?.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default FormPage;
