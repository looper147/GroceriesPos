import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/AntDesign";

<Icon name="search1" size={20} />;
const Dropdown = ({
  data,
  searchPlaceHolder,
  buttonPlaceholder,
  selected,
}: any) => {
  return (
    <SelectDropdown
      dropdownStyle={{ backgroundColor: "#e0efff" }}
      search={true}
      searchPlaceHolder={searchPlaceHolder}
      defaultButtonText={buttonPlaceholder}
      searchInputTxtStyle={{ color: "#000000", marginLeft: 33 }}
      searchInputStyle={{ backgroundColor: "#e0efff" }}
      renderSearchInputLeftIcon={(selectedItem, index) => (
        <Icon name="search1" size={20} />
      )}
      data={data}
      onSelect={selected}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
};
export default Dropdown;
