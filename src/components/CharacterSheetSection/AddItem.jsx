import React from 'react';
import {ListItem} from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
export default ({ItemComponent, item, handleAddItem}) => {
	return (<ListItem
		rightIcon={<ContentAdd />}
		onTouchTap={ () => handleAddItem(item) }>
		<ItemComponent item={item} />
	</ListItem>)
}
