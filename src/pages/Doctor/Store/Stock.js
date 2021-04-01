import { firestoreConnect, isLoaded } from "react-redux-firebase";

import FormInputControlled from "../../../common/components/FormInputControlled";
import { IconSpinner } from "../../../common/components/Icons";
import { compose } from "redux";
import { connect } from "react-redux";
import { getFirestore } from "redux-firestore";
import moment from "moment";
import { useState } from "react";

const Stock = (props) => {
  const { stock, loaded } = props;
  const firestore = getFirestore();
  const [showModal, setShowModal] = useState(false);

  const [newItemName, setNewItemName] = useState("");
  const [saving, setSaving] = useState(false);

  const onQtySave = (val, id) => {
    firestore
      .collection("stock")
      .doc(id)
      .update({
        qty: val ?? 0,
        updatedAt: new Date(),
      });
  };
  const onDelete = (id) => {
    const ans = window.confirm(`Are you sure? this cannot be undone!`);
    if (ans) firestore.collection("stock").doc(id).delete();
  };
  const addItem = async () => {
    if (newItemName === "") return alert("Name is required");
    setSaving(true);
    await firestore.collection("stock").add({
      name: newItemName,
      qty: 0,
      updatedAt: new Date(),
    });
    setNewItemName("");
    setSaving(false);
  };

  if (!loaded) return <div></div>;
  return (
    <div className="px-8 py-10 ">
      <div className="mb-6 flex flex-row justify-between items-center">
        <div className="text-md font-bold"> Medical Stock</div>
        <div
          onClick={() => setShowModal(true)}
          className="bg-blue-500 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-blue-400 ease-out duration-300"
        >
          Add New Item
        </div>
      </div>
      {showModal ? (
        <div className="mb-6 flex flex-row items-end p-4 border rounded-md space-x-2">
          <div className="w-full">
            <FormInputControlled
              id="name"
              labelText="Name"
              name="name"
              type="text"
              onChange={(e) => setNewItemName(e.target.value)}
              autoFocus="true"
              minLength="0"
              maxLength="100"
              placeholder="Item name"
              disabled={saving}
              value={newItemName}
            />
          </div>
          <div
            onClick={() => addItem(true)}
            disabled={saving}
            className="bg-blue-500 px-4 py-1 rounded-md text-white cursor-pointer hover:bg-blue-400 ease-out duration-300"
          >
            {!saving ? (
              "Save"
            ) : (
              <div className="w-6 h-6 text-white ">
                <IconSpinner />
              </div>
            )}
          </div>
          <div
            onClick={() => {
              if (!saving) setShowModal(false);
              setNewItemName("");
            }}
            className="bg-gray-500 px-4 py-1 rounded-md text-white cursor-pointer hover:bg-gray-400 ease-out duration-300"
          >
            Cancel
          </div>
        </div>
      ) : null}
      <div>
        <table class="min-w-full table-auto rounded-md overflow-hidden">
          <thead class="justify-between">
            <tr class="bg-gray-800">
              <th class="py-3 px-2 text-left ">
                <span class="text-gray-300">Name</span>
              </th>
              <th class="py-3 px-2 text-left w-48">
                <span class="text-gray-300">Quantity</span>
              </th>
              <th class="py-3 px-2 text-left w-48">
                <span class="text-gray-300">Last Updated At</span>
              </th>
              <th class="py-3 px-2 text-left w-32">
                <span class="text-gray-300">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200">
            {stock &&
              stock.map((item) => {
                return (
                  <StockItem
                    item={item}
                    onSave={onQtySave}
                    onDelete={onDelete}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const StockItem = ({ item, onSave, onDelete }) => {
  const [updated, setUpdated] = useState(false);
  const [val, setVal] = useState(item.qty);
  const [delText, setDelText] = useState("Delete");
  return (
    <tr key={item.id} class="border-b border-gray-200 hover:bg-gray-100">
      <td class="py-3 px-2 text-left whitespace-nowrap">
        <span class="font-semibold">{item.name}</span>
      </td>
      <td class="py-3 px-2 text-left flex-nowrap flex flex-row">
        <input
          type="number"
          className="w-full h-8 px-2"
          value={val}
          onChange={(e) => {
            setVal(parseInt(e.target.value));
            setUpdated(true);
          }}
        ></input>
        {updated ? (
          <div className="flex-1 flex-shrink-0 flex flex-row">
            <button
              className="p-1"
              onClick={() => {
                onSave(val, item.id);
                setUpdated(false);
              }}
            >
              ✔
            </button>
            <button
              className="p-1"
              onClick={() => {
                setVal(parseInt(item.qty));
                setUpdated(false);
              }}
            >
              ❌
            </button>
          </div>
        ) : null}
      </td>

      <td class="py-3 px-2 text-left whitespace-nowrap">
        <span>
          {moment(item.updatedAt?.toDate()).format("DD MMM YYYY hh:mm A")}
        </span>
      </td>
      <td class="py-3 px-2 text-left whitespace-nowrap">
        <div
          className="hover:underline cursor-pointer select-none text-blue-400"
          onClick={() => {
            if (delText === "Delete") {
              setDelText("Deleting...");
              onDelete(item.id);
            }
          }}
        >
          {delText}
        </div>
      </td>
    </tr>
  );
};

const mapStateToProps = (state, props) => {
  return {
    stock: state.firestore.ordered.stock ?? [],
    loaded: isLoaded(state.firestore.ordered.stock),
    myId: state.firebase.auth.uid ?? "",
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "stock",
        orderBy: "name",
      },
    ];
  })
)(Stock);
