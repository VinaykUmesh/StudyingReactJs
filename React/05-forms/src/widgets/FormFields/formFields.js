import React from 'react';

const FormFields = (props) => {

    const renderFields=()=>{
        const formArray= [];

        for (let elementName in props.formData){

             formArray.push({
                 id:elementName,
                 settings: props.formData[elementName]
             })
        }
        return formArray.map((item,i)=>{
            return( 
              <div key={i} className="form_element">
                 {renderTemplate(item)}
             </div>
             )
         })

    }

         const renderTemplate =(data)=>{
             let formTemplate ='';
             let values = data.settings;

            switch(values.element){
                case('input'):
                formTemplate = (
                    <div>
                        {values.label?
                        <label>{values.labelText}</label>
                    :null
                    }
                    <input
                    {...values.config}
                    value={values.value}
                    />
                    </div>
                )
                break;
                default:
                    formTemplate=null;
            }
            return formTemplate

         }

    return (
        <div>
            {renderFields()}
        </div>
    );
};

export default FormFields;