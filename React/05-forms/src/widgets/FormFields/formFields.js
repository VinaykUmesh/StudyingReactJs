import React from 'react';

const FormFields = (props) => {

    const renderFields=()=>{
        const formArray= [];

        for (let elementName in props.formData){

             formArray.push({
                 id:elementName,
                 settings: props.formData[elementName]
             })

             console.log(formArray)
            
            // return formArray.map((item,i)=>{
            //    return( 
            //      <div key={i} className="form_element">
            //         input
            //     </div>
            //     )
            // })

        }
    }


    return (
        <div>
            {renderFields()}
        </div>
    );
};

export default FormFields;