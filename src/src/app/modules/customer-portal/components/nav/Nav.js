import React from 'react'
import PropTypes from 'prop-types'

export const Nav = ({
  renderItem,
  selectedTicketIds,
  selectedTicketId,
  onTicketSelected,
  onTicketRemoved,
  children
}) => {
  return (
    <ul className="pel--sr-tabs">
      {selectedTicketIds.map((data, index) =>
        renderItem({
          ticketId: data.ticketId,
          label: data.label,
          selectedTicketId,
          onTicketSelected,
          onTicketRemoved,
          key: `sr-tab-${index}`
        })
      )}
      {children}
    </ul>
  )
}

Nav.defaultProps = {
  selectedTicketId: null
}

Nav.propTypes = {
  renderItem: PropTypes.func.isRequired,
  selectedTicketIds: PropTypes.arrayOf(PropTypes.string),
  selectedTicketId: PropTypes.string,
  onTicketSelected: PropTypes.func.isRequired,
  onTicketRemoved: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
