import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link, RouteComponentProps } from "@reach/router"

export default function SimpleBreadcrumbs(props: RouteComponentProps) {
    const crumbs = props.location && props.location.pathname.split('/').slice(1)
    let link =''
    const lastIndex = crumbs && crumbs.length - 1

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                crumbs?.map((crumb, i: number) => {
                    link = link + '/' + crumb
                    if(i !== lastIndex) {
                        return (
                            <Link color="inherit" to={link}>
                                {crumb}
                            </Link>
                        )
                    } else {
                        return (
                            <Typography color="textPrimary">{crumb}</Typography>
                        )
                    }
                })
            }
        </Breadcrumbs>
    );
}