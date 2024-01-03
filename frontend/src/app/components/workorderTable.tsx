import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  ChipProps,
  Selection,
  Tooltip,
} from '@nextui-org/react'
import {
  columns,
  users,
  statusOptions,
  floorOptions,
  sectionOptions,
} from '../workorder.json'
import {
  PencilSquareIcon,
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid'

const statusColorMap: Record<string, ChipProps['color']> = {
  compleated: 'success',
  incompleate: 'danger',
  scheduled: 'warning',
}

const INITIAL_VISIBLE_COLUMNS = [
  'workorderId',
  'assetId',
  'floor',
  'section',
  'status',
  'date',
  'actions',
]

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function WorkorderTable() {
  const [filterValue, setFilterValue] = React.useState('')
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]))
  const [visibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  )
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all')
  const [floorFilter, setFloorFilter] = React.useState<Selection>('all')
  const [sectionFilter, setSectionFilter] = React.useState<Selection>('all')
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(1)

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = React.useMemo(() => {
    return columns.filter(column =>
      Array.from(visibleColumns).includes(column.uid)
    )
  }, [visibleColumns])

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users]

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        user =>
          user.workorderId.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.assetId.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter(user =>
        Array.from(statusFilter).includes(user.status)
      )
    }
    if (
      floorFilter !== 'all' &&
      Array.from(floorFilter).length !== floorOptions.length
    ) {
      filteredUsers = filteredUsers.filter(user =>
        Array.from(floorFilter).includes(user.floor)
      )
    }
    if (
      sectionFilter !== 'all' &&
      Array.from(sectionFilter).length !== sectionOptions.length
    ) {
      filteredUsers = filteredUsers.filter(user =>
        Array.from(sectionFilter).includes(user.section)
      )
    }

    return filteredUsers
  }, [users, filterValue, statusFilter, floorFilter, sectionFilter])

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const renderCell = React.useCallback(
    (
      user: {
        [x: string]: any
        assetId:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | React.PromiseLikeOfReactNode
          | null
          | undefined
        floor:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | React.PromiseLikeOfReactNode
          | null
          | undefined
        section:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | React.PromiseLikeOfReactNode
          | null
          | undefined
        status: string | number
        date:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | React.PromiseLikeOfReactNode
          | null
          | undefined
      },
      columnKey: string | number
    ) => {
      const cellValue = user[columnKey]

      switch (columnKey) {
        case 'workorderId':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          )
        case 'assetId':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          )
        case 'floor':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          )
        case 'section':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          )
        case 'status':
          return (
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColorMap[user.status]}
              size="sm"
              variant="dot"
            >
              {cellValue}
            </Chip>
          )
        case 'date':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          )
        case 'actions':
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit workorder" showArrow placement="top">
                <Button isIconOnly size="sm" variant="light" className="p-1">
                  <PencilSquareIcon
                    className="text-default-300"
                    style={{ color: '#d1d5db' }}
                  />
                </Button>
              </Tooltip>
              <Tooltip content="Open digital twin" showArrow placement="top">
                <Button isIconOnly size="sm" variant="light" className="p-1">
                  <ArrowTopRightOnSquareIcon
                    className="text-default-300"
                    style={{ color: '#d1d5db' }}
                  />
                </Button>
              </Tooltip>
            </div>
          )
        default:
          return cellValue
      }
    },
    []
  )

  const onRowsPerPageChange = React.useCallback(
    (e: { target: { value: any } }) => {
      setRowsPerPage(Number(e.target.value))
      setPage(1)
    },
    []
  )

  const onSearchChange = React.useCallback(
    (value: React.SetStateAction<string>) => {
      if (value) {
        setFilterValue(value)
        setPage(1)
      } else {
        setFilterValue('')
      }
    },
    []
  )

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: 'w-full sm:max-w-[44%]',
              inputWrapper: 'border-1',
            }}
            placeholder="Search by Workorder ID or Asset ID..."
            size="sm"
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue('')}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="md"
                  variant="bordered"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map(status => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="md"
                  variant="bordered"
                >
                  Floor
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={floorFilter}
                selectionMode="multiple"
                onSelectionChange={setFloorFilter}
              >
                {floorOptions.map(floor => (
                  <DropdownItem key={floor.uid} className="capitalize">
                    {capitalize(floor.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="md"
                  variant="bordered"
                >
                  Section
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={sectionFilter}
                selectionMode="multiple"
                onSelectionChange={setSectionFilter}
              >
                {sectionOptions.map(section => (
                  <DropdownItem key={section.uid} className="capitalize">
                    {capitalize(section.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }, [
    filterValue,
    statusFilter,
    floorFilter,
    sectionFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ])

  const classNames = React.useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'max-w-3xl'],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
      td: [
        // changing the rows border radius
        // first
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        // middle
        'group-data-[middle=true]:before:rounded-none',
        // last
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    []
  )

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells"
      bottomContentPlacement="outside"
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader columns={headerColumns}>
        {column => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No workorders found!'} items={items}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
