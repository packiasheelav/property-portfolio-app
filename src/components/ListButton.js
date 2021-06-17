import React from 'react';
import cls from 'classnames';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { ListItem, ListItemIcon, ListItemText, createStyles, withStyles, WithStyles } from '@material-ui/core';

const styles = createStyles({
	listButton: {
		color: 'inherit',
		'&:hover': {
			backgroundColor: 'inherit'
		}
	},
	listButtonIcon: {
		color: 'inherit',
		width: '1.6rem',
		'& > svg': {
			width: '1.6rem'
		}
	},
	listButtonText: {
		fontSize: '1.3rem',
		fontWeight: 500,
		color: 'inherit'
	}
});



export default withStyles(styles)(({ icon: IconComponent, primary, classes, classNames }) => (
	<ListItem button className={cls(classes.listButton, classNames && classNames.root)}>
		{IconComponent && (
			<ListItemIcon className={cls(classes.listButtonIcon, classNames && classNames.icon)}>
				<IconComponent />
			</ListItemIcon>
		)}
		<ListItemText
			disableTypography
			primary={primary}
			className={cls(classes.listButtonText, classNames && classNames.text)}
		/>
	</ListItem>
));
