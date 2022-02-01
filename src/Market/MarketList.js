
function MarketList(props){
return(
    <table>
    <thead >
      <tr>
        <th >id</th>
        <th>username</th>
        <th>password</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default MarketList