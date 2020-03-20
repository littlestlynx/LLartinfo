import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const TermsOfService = () => {
    return (
        <>
        <Typography variant="h6" align="left" color="textSecondary" paragraph>
            <ul>
                <li className="tos-list-item">
                    You are entitled to ask for revisions throughout the entire process. <br/> 
                    Without speaking up I cannot help provide work that fits your vision.
                </li>
                <li className="tos-list-item">
                    All payments are required to be in USD.
                </li>
                <li className="tos-list-item">
                    Each project has a turnaround time of 1-3 weeks. 
                </li>
                <li className="tos-list-item">
                After a commission is complete, a refund can no longer be issued. However:
                    <ul>
                    <li>
                    A 50% refund can be provided if the work is still in progress.
                    </li>
                    <li>
                    A 100% refund can be provided if the commission has not been started.
                    </li>
                    </ul>
                </li>
            </ul>
            
        </Typography>
        <p className="terms-footer">
        You can 
            <Link color="blue" href="https://twitter.com/littlestlynx"> 
                { } DM me on twitter { }
            </Link> 
        for a quote.
        </p>
        </>
    )
}

export default TermsOfService