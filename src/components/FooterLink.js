import React from 'react';
import {  createStyles, withStyles } from '@material-ui/core';
import NavLink from './NavLink';

const styles = () =>
	createStyles({
		root: {
			padding: '0.6rem 1.6rem 0.6rem 1rem',
			boxShadow: 'none',
			textTransform: 'uppercase',
			transition: 'all 0.2s',
			borderRadius: '0.4rem',
			'&:hover': {
				backgroundColor: '#1976d2'
			}
		},
		content: {
			display: 'flex',
			alignItems: 'center'
		}
	});


const FooterLink = ({ to, children, classes }) => (
	<NavLink data-testid="back-home" to={{ pathname: to }} classNames={{ root: classes.root, content: classes.content }}>
		{children}
	</NavLink>
);

export default withStyles(styles)(FooterLink);
