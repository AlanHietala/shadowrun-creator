import React from 'react'
import {List, ListItem} from 'material-ui/List'
import {Tabs, Tab} from 'material-ui/Tabs';

const AttributeItem = ({title, value}) => {
	return (<div style={styles.attribute}>
		<div style={styles.attributeLine}>{title}</div>
		<div style={styles.attributeLine}>{value}</div>
	</div>)
}

export default ({attributes}) => {
	const {
		strength,
		agility,
		willpower,
		magic,
		body,
		reaction,
		charisma,
		intuition,
		logic,
		essence
	} = attributes;
	return (
		<div style={styles.attributeList}>
			<AttributeItem title="Bod" value={body.computed} />
			<AttributeItem title="Str" value={strength.computed} />
			<AttributeItem title="Agi" value={agility.computed} />
			<AttributeItem title="Rea" value={reaction.computed} />
			<AttributeItem title="Wil" value={willpower.computed} />
			<AttributeItem title="Int" value={intuition.computed} />
			<AttributeItem title="Log" value={logic.computed} />
			<AttributeItem title="Cha" value={charisma.computed} />
			<AttributeItem title="Magic" value={magic.computed} />
			<AttributeItem title="Ess" value={essence.computed} />
		</div>
	)
}

const styles = {
	attributeList: {
		display: 'flex',
		flexDirection: 'row'
	},
	attribute: {
		flexDirection: 'column',
		margin: '0.5rem'
	},
	attributeLine: {
		textAlign: 'center'
	}
}