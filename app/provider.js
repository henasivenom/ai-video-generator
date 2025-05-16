import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import { Users } from '../configs/schema';
import { db } from '../configs/db';

function Provider( {children}) {

    const {user}= useUser();

    useEffect (()=>{
        user&&isNewUser();
    },[user]);

    const {isNewUser}= async()=>{
        const result = await db.select().from(Users)
        .where(eq(Users.id, user?.primaryEmailAddressEmailAddress?.EmailAddressId));

        console.log(result);

        
        if(!result){
            await db.insert(Users).values({
                name: user.fullName,
                email: user?.primaryEmailAddress?.EmailAddress,
                imageurl: user?.ImageUrl,
            });
        }
    }
  return (
    <div>
      {children}
    </div>
  )
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider
