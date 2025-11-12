import React, { useContext } from "react";
import { shippingContext } from "../../context/ShippingContext";
import { shippingRates } from "../../config/shippingrates";

const TableList = () => {
  const { state } = useContext(shippingContext);
  const { shippingDetails = [] } = state;

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Shipping Box List
      </h2>

      {shippingDetails.length === 0 ? (
        <p className="text-gray-500 text-center">No Shipping Data added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Receiver Name</th>
                <th className="py-2 px-4 border-b text-left">Weight (kg)</th>
                <th className="py-2 px-4 border-b text-left">Box Colour</th>
                <th className="py-2 px-4 border-b text-left">
                  Destination Country
                </th>
                <th className="py-2 px-4 border-b text-left">
                  Shipping Cost (INR)
                </th>
              </tr>
            </thead>
            <tbody>
              {shippingDetails.map((shippingData) => {
                const { country, receiver, weight, color } = shippingData;
                const rate = shippingRates[country] || 0;
                const cost = (weight * rate).toFixed(2);

                return (
                  <tr key={shippingData.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{receiver}</td>
                    <td className="py-2 px-4 border-b">{weight}</td>
                    <td className="py-2 px-4 border-b">
                      <div
                        className="w-6 h-6 rounded border"
                        style={{ backgroundColor: color }}
                      ></div>
                    </td>
                    <td className="py-2 px-4 border-b">{country}</td>
                    <td className="py-2 px-4 border-b">₹{cost}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableList;
