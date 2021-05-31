import { firestoreConnect, isLoaded } from "react-redux-firebase";
import React,{Component} from 'react';

import FormInputControlled from "../../../common/components/FormInputControlled";
import { IconSpinner } from "../../../common/components/Icons";
import { compose } from "redux";
import { connect } from "react-redux";
import { getFirestore } from "redux-firestore";
import moment from "moment";
import { useState } from "react";
import {Router,__RouterContext} from "react-router";
import CheckBox from "../../../common/components/CheckBox";


export const Prescription = (props) => {
  const { prescription, role, loaded } = props;
  const firestore = getFirestore();
  const [showModal, setShowModal] = useState(false);

  const [newItemName, setNewItemName] = useState("");
  const [saving, setSaving] = useState(false);
  
  

  const onQtySave = (val, id,) => {
    firestore
      .collection("prescription")
      .doc(id)
      .update({
        by:role,
        qty: val ?? 0,
        updatedAt: new Date(),
      });
  };
  const onDelete = (id) => {
    const ans = window.confirm(`Are you sure? this cannot be undone!`);
    if (ans) firestore.collection("prescription").doc(id).delete();
  };
  const addItem = async () => {
    if (newItemName === "") return alert("Name is required");
    setSaving(true);
    await firestore.collection("prescription").add({
      name: newItemName,
      qty: 0,
      updatedAt: new Date(),
    });
    setNewItemName("");
    setSaving(false);
  };
  
  /*contructor =(props)=>{
    super(props)
    this.state={
      times:[
        {id:1,value:"Breakfast",isChecked:false},
        {id:2,value:"Lunch",isChecked:false},
        {id:3,value:"Dinner",isChecked:false},
      ]
    }
  

  handleAllChecked =(event) =>{
    let times = this.state.times
    times.forEach(times=>times.isChecked = event.target.checked)
    this.setState({times:times})
  }
  handleCheckChieldElement=(event)=>{
    let times=this.state.times
    times.forEach(times=>{
      if(times.value===event.target.value)
      times.isChechked = event.target.isChecked
    })
    this,setState({times:times})
  }
  }*/
 
 
  if (!loaded) return <div></div>;
  return (
    <div className="px-8 py-10 ">
      <div className="mb-6 flex flex-row justify-between items-center">
        <div className="text-md font-bold"> Prescription</div>
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
                <span class="text-gray-300">Medicine</span>
              </th>
              <th class="py-3 px-2 text-left w-48">
                <span class="text-gray-300">Quantity</span>
              </th>
              <th class="py-3 px-2 text-left w-38">
                  <span class="text-gray-300">Before Meal</span>
              </th>
              <th class="py-3 px-2 text-left w-38">
              <span class="text-gray-300">After Meal</span>
              </th>
              <th class="py-3 px-2 text-left w-38">
                <span class="text-gray-300">Date</span>
              </th>
              <th class="py-3 px-2 text-left w-32">
                <span class="text-gray-300">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200">
            {prescription &&
              prescription.map((item) => {
                return (
                  <StockItem
                    item={item}
                    onSave={onQtySave}
                    onDelete={onDelete}
                    

                // uid={role=== "DOCTOR"?prescription.doctorUid:""}
                  />
                );
                
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StockItem = ({ item, onSave, onDelete }) => {
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
      <td>
        <input className="ml-10" type="checkbox"></input>
     
        
      </td>
      <td>
      <input className="ml-10" type="checkbox" /*onClick={this.handleAllChecked} value="checkall"*/></input>
            {/*  <ul>{
                this.state.times.map((times)=>{
                  return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...times} />)
                })
              }
            </ul>*/}
       
           
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


const mapStateToProps = (state, _props) => {
  return {
    prescription: state.firestore.ordered.prescription ?? [],
    loaded: isLoaded(state.firestore.ordered.prescription),
    uid: state.firebase?.auth?.uid,
    role: state.firebase?.profile?.role,
    
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
   //if(props.uid && props.role)
    return [
      {
        collection: "prescription",
        orderBy: "name",
      /* where:[
        props.role === "DOCTOR"?"doctorUid":"patientUid",
        "==",
          
         props.uid,
        ],*/
      },
                
        
        ];
   // return[];
  })
)(Prescription);
