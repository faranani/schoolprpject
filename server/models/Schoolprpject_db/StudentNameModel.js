import StudentNameModelGenerated from "./generated/StudentNameModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = StudentNameModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await StudentNameModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StudentNameModelGenerated,
  ...customModel
};
