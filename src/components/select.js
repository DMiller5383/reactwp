export const renderSelect = (field) => {
  let categories = [];
  if(!typeof this.props.categories === 'undefined') {
    categories = this.props.categories;
  }

  let options = [];
  if(!_.isEmpty(categories)) {
    options = categories.map((category)=>{
      return(<option id={category.id} value={category.id}>category.title</option>);
    })
  }
  return (
    <div className="input-row">
      <select className={field.className}>{options}</select>
    </div>
  )
}
